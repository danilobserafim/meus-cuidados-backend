/*
  Warnings:

  - You are about to drop the column `dataHora` on the `glicose` table. All the data in the column will be lost.
  - You are about to drop the column `dataHora` on the `insulina` table. All the data in the column will be lost.
  - You are about to drop the column `dataHora` on the `pressao` table. All the data in the column will be lost.
  - Added the required column `data-hora` to the `Glicose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data-hora` to the `Insulina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data-hora` to the `Pressao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `glicose` DROP COLUMN `dataHora`,
    ADD COLUMN `data-hora` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `insulina` DROP COLUMN `dataHora`,
    ADD COLUMN `data-hora` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `pressao` DROP COLUMN `dataHora`,
    ADD COLUMN `data-hora` DATETIME(3) NOT NULL;
