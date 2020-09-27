using JsonFlatFileDataStore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Pharmacy.Api.DataModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy.Api.JSONDataManager
{
    public class JsonDataManager : IJsonDataManager
    {
        private DataStore _store;
        public JsonDataManager(IConfiguration configuration)
        {
            var contentRoot = configuration.GetValue<string>(WebHostDefaults.ContentRootKey);
             _store = new DataStore(contentRoot+"\\App_Data\\JsonDataFile.json");
        }

        public async Task AddSingleMedicine(MedicineDTO medicine)
        {
            var collection = _store.GetCollection<MedicineDTO>();
            await collection.InsertOneAsync(medicine);
        }

        public async Task UpdateSingleMedicine(MedicineDTO medicine)
        {
            var collection = _store.GetCollection<MedicineDTO>();
            var dirty= collection.AsQueryable().FirstOrDefault(c => c.Id == medicine.Id);
            dirty.FullName = medicine.FullName; 
            dirty.Brand = medicine.Brand; 
            dirty.Quantity = medicine.Quantity; 
            dirty.Price = medicine.Price; 
            dirty.ExpiryDate = medicine.ExpiryDate; 
            dirty.Notes = medicine.Notes;
            await collection.UpdateOneAsync(dirty.Id, dirty);
        }
        public IEnumerable<MedicineDTO> GetAllMedicine()
        {
            var collection = _store.GetCollection<MedicineDTO>();
            return collection.AsQueryable().OrderByDescending(_ => _.Id);
        }

        public  MedicineDTO GetMedicineById(int id)
        {
            var collection = _store.GetCollection<MedicineDTO>();
            return collection.AsQueryable().Where(e => e.Id == id).FirstOrDefault();
        }
    }

    public interface IJsonDataManager
    {
        Task AddSingleMedicine(MedicineDTO medicine);
        Task UpdateSingleMedicine(MedicineDTO medicine);
        IEnumerable<MedicineDTO> GetAllMedicine();
        MedicineDTO GetMedicineById(int id);
    }
}
