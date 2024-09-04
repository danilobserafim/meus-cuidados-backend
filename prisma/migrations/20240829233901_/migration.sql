/*
  Warnings:

  - You are about to drop the `insulina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `insulina` DROP FOREIGN KEY `Insulina_userId_fkey`;

-- DropTable
DROP TABLE `insulina`;

-- CreateTable
CREATE TABLE `HistoricoAplicacaoMedicamento` (
    `id` VARCHAR(191) NOT NULL,
    `horarioAplicado` DATETIME(3) NOT NULL,
    `medicamentoId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HistoricoAplicacaoMedicamento` ADD CONSTRAINT `HistoricoAplicacaoMedicamento_medicamentoId_fkey` FOREIGN KEY (`medicamentoId`) REFERENCES `Medicamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
