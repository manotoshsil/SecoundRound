using AutoMapper;
using Moq;
using Pharmacy.Api.DomainModels;
using Pharmacy.Api.JSONDataManager;
using Pharmacy.Api.Repositories;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Pharmacty.Api.Tests.Repositories
{
    public class MedicineRepositoryTests
    {
        private MockRepository mockRepository;

        private Mock<IMapper> mockMapper;
        private Mock<IJsonDataManager> mockJsonDataManager;

        public MedicineRepositoryTests()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockMapper = this.mockRepository.Create<IMapper>();
            this.mockJsonDataManager = this.mockRepository.Create<IJsonDataManager>();
        }

        private MedicineRepository CreateMedicineRepository()
        {
            return new MedicineRepository(
                this.mockMapper.Object,
                this.mockJsonDataManager.Object);
        }

        [Fact]
        public async Task Create_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineRepository = this.CreateMedicineRepository();
            MedicinePayload medicine = null;

            // Act
            await medicineRepository.Create(
                medicine);

            // Assert
            Assert.True(true);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public async Task Update_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineRepository = this.CreateMedicineRepository();
            MedicinePayload medicine = null;

            // Act
            await medicineRepository.Update(
                medicine);

            // Assert
            Assert.True(true);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public void GetAllMedicine_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineRepository = this.CreateMedicineRepository();

            // Act
            var result = medicineRepository.GetAllMedicine();

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public void GetMedicineById_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var medicineRepository = this.CreateMedicineRepository();
            int id = 0;

            // Act
            var result = medicineRepository.GetMedicineById(
                id);

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }
    }
}
