using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy.Api.DataModels
{
    public class MedicineDTO
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Brand { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpiryDate { get; set; }
        public String Notes { get; set; }
    }
}
