using Microsoft.Extensions.Logging;
using Moq;
using Pharmacy.Api.Controllers;
using Pharmacy.Api.DomainModels;
using Pharmacy.Api.Repositories;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Pharmacty.Api.Tests.Controllers
{
    public class MedicineStockControllerTests
    {
        private MockRepository mockRepository;

        private Mock<ILogger<MedicineStockController>> mockLogger;
        private Mock<IMedicineRepository> mockMedicineRepository;

        public MedicineStockControllerTests()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockLogger = this.mockRepository.Create<ILogger<MedicineStockController>>();
            this.mockMedicineRepository = this.mockRepository.Create<IMedicineRepository>();
        }

        private MedicineStockController CreateMedicineStockController()
        {
            return new MedicineStockController(
                this.mockLogger.Object,
                this.mockMedicineRepository.Object);
        }

        [Fact]
        public void Get_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineStockController = this.CreateMedicineStockController();

            // Act
            var result = medicineStockController.Get();

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public void Get_StateUnderTest_ExpectedBehavior1()
        {
            // Arrange
            var medicineStockController = this.CreateMedicineStockController();
            int id = 0;

            // Act
            var result = medicineStockController.Get(
                id);

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public async Task Add_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineStockController = this.CreateMedicineStockController();
            MedicinePayload medicine = null;

            // Act
            var result = await medicineStockController.Add(
                medicine);

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public async Task Update_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineStockController = this.CreateMedicineStockController();
            MedicinePayload medicine = null;

            // Act
            var result = await medicineStockController.Update(
                medicine);

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }
    }
}
