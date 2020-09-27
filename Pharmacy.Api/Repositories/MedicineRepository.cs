using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Pharmacy.Api.DataModels;
using Pharmacy.Api.DomainModels;
using Pharmacy.Api.JSONDataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy.Api.Repositories
{
    public class MedicineRepository : IMedicineRepository
    {
        private readonly IMapper _mapper;
        private readonly IJsonDataManager _jSonDataManager;

        public MedicineRepository(IMapper mapper , IJsonDataManager jSonDataManager)
        {
            _mapper = mapper;
            _jSonDataManager = jSonDataManager;
        }

        public async Task Create(MedicinePayload medicine)
        {
            var medicinDTO = _mapper.Map<MedicineDTO>(medicine);
            await _jSonDataManager.AddSingleMedicine(medicinDTO);

        }
        public async Task Update(MedicinePayload medicine)
        {
            var medicinDTO = _mapper.Map<MedicineDTO>(medicine);
            await _jSonDataManager.UpdateSingleMedicine(medicinDTO);

        }

        public IEnumerable<MedicineDTO> GetAllMedicine()
        {
           return _jSonDataManager.GetAllMedicine();
        }

        public MedicineDTO GetMedicineById(int id)
        {
            return _jSonDataManager.GetMedicineById(id);
        }
    }

    public interface IMedicineRepository
    {
        Task Create(MedicinePayload medicine);
        Task Update(MedicinePayload medicine);
        IEnumerable<MedicineDTO> GetAllMedicine();
        MedicineDTO GetMedicineById(int id);
    }
}
