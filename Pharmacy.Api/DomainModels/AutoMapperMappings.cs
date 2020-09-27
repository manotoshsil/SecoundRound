using AutoMapper;
using Pharmacy.Api.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy.Api.DomainModels
{
    
    public class AutoMapperMappings : Profile
    {
        public AutoMapperMappings()
        {
           
            CreateMap<MedicinePayload, MedicineDTO>();
            CreateMap<MedicineDTO, MedicinePayload>();
        }
    }
}
