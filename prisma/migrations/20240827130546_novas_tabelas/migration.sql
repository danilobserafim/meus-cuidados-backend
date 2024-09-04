/*
  Warnings:

  - You are about to drop the column `data-hora` on the `glicose` table. All the data in the column will be lost.
  - You are about to drop the column `data-hora` on the `insulina` table. All the data in the column will be lost.
  - You are about to drop the column `data-hora` on the `pressao` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `pressao` table. All the data in the column will be lost.
  - Added the required column `dataHora` to the `Glicose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataHora` to the `Insulina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataHora` to the `Pressao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorDiastolica` to the `Pressao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorSistolica` to the `Pressao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `glicose` DROP COLUMN `data-hora`,
    ADD COLUMN `dataHora` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `insulina` DROP COLUMN `data-hora`,
    ADD COLUMN `dataHora` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `pressao` DROP COLUMN `data-hora`,
    DROP COLUMN `valor`,
    ADD COLUMN `dataHora` DATETIME(3) NOT NULL,
    ADD COLUMN `valorDiastolica` VARCHAR(191) NOT NULL,
    ADD COLUMN `valorSistolica` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `FrequenciaCardiaca` (
    `id` VARCHAR(191) NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `valor` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Temperatura` (
    `id` VARCHAR(191) NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Saturacao` (
    `id` VARCHAR(191) NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `valor` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMC` (
    `id` VARCHAR(191) NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colesterol` (
    `id` VARCHAR(191) NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `total` DOUBLE NOT NULL,
    `hdl` DOUBLE NOT NULL,
    `ldl` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Triglicerideo` (
    `id` VARCHAR(191) NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FrequenciaCardiaca` ADD CONSTRAINT `FrequenciaCardiaca_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Temperatura` ADD CONSTRAINT `Temperatura_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Saturacao` ADD CONSTRAINT `Saturacao_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IMC` ADD CONSTRAINT `IMC_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Colesterol` ADD CONSTRAINT `Colesterol_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Triglicerideo` ADD CONSTRAINT `Triglicerideo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
