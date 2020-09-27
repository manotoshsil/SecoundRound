using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pharmacy.Api.DataModels;
using Pharmacy.Api.DomainModels;
using Pharmacy.Api.Repositories;

namespace Pharmacy.Api.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class MedicineStockController : ControllerBase
    {
       
        private readonly ILogger<MedicineStockController> _logger;
        private readonly IMedicineRepository _repo;
        public MedicineStockController(ILogger<MedicineStockController> logger , IMedicineRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        [Route("all")]
        public IEnumerable<MedicineDTO> Get()
        {
            return _repo.GetAllMedicine();
        }

        [HttpGet]
        [Route("byid")]
        public MedicineDTO Get(int id)
        {
            return _repo.GetMedicineById(id);
        }
        [HttpPost]
        public async Task<IActionResult> Add(MedicinePayload  medicine)
        {
            if (!ModelState.IsValid)
            { 
                return BadRequest("Expiry date less than 15 days is not allowed to be added to stock");
            }
            await _repo.Create(medicine);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update(MedicinePayload medicine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("One or more edited value is invalid");
            }
            await _repo.Update(medicine);
            return Ok();
        }



    }
}
