using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy.Api.DomainModels
{
	public class MedicinePayloadValidator : AbstractValidator<MedicinePayload>
	{
		public MedicinePayloadValidator()
		{

			RuleFor(x => x.ExpiryDate).GreaterThan(DateTime.Now.AddDays(14));
			RuleFor(x => x.FullName).MinimumLength(1);
			RuleFor(x => x.Price).GreaterThan(0);
			RuleFor(x => x.Quantity).GreaterThan(0);
		}
	}
}
