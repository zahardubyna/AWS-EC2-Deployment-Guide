import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734693161627 implements MigrationInterface {
    name = 'Migration1734693161627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`file_name\` varchar(255) NOT NULL, \`file_original_name\` varchar(255) NOT NULL, \`aws_url\` longtext NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`starships\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`manufacturer\` varchar(255) NOT NULL, \`cost_in_credits\` varchar(255) NOT NULL, \`length\` varchar(255) NOT NULL, \`max_atmosphering_speed\` varchar(255) NOT NULL, \`crew\` varchar(255) NOT NULL, \`passengers\` varchar(255) NOT NULL, \`cargo_capacity\` varchar(255) NOT NULL, \`consumables\` varchar(255) NOT NULL, \`hyperdrive_rating\` varchar(255) NOT NULL, \`MGLT\` varchar(255) NOT NULL, \`starship_class\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`edited\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`manufacturer\` varchar(255) NOT NULL, \`cost_in_credits\` varchar(255) NOT NULL, \`length\` varchar(255) NOT NULL, \`max_atmosphering_speed\` varchar(255) NOT NULL, \`crew\` varchar(255) NOT NULL, \`passengers\` varchar(255) NOT NULL, \`cargo_capacity\` varchar(255) NOT NULL, \`consumables\` varchar(255) NOT NULL, \`vehicle_class\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`edited\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`episode_id\` varchar(255) NOT NULL, \`opening_crawl\` longtext NOT NULL, \`director\` varchar(255) NOT NULL, \`producer\` varchar(255) NOT NULL, \`release_date\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`edited\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`planets\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`rotation_period\` varchar(255) NOT NULL, \`orbital_period\` varchar(255) NOT NULL, \`diameter\` varchar(255) NOT NULL, \`climate\` varchar(255) NOT NULL, \`gravity\` varchar(255) NOT NULL, \`terrain\` varchar(255) NOT NULL, \`surface_water\` varchar(255) NOT NULL, \`population\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`edited\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`height\` varchar(255) NOT NULL, \`mass\` varchar(255) NOT NULL, \`hair_color\` varchar(255) NOT NULL, \`skin_color\` varchar(255) NOT NULL, \`eye_color\` varchar(255) NOT NULL, \`birth_year\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`edited\` varchar(255) NOT NULL, \`homeworldId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`species\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`classification\` varchar(255) NOT NULL, \`designation\` varchar(255) NOT NULL, \`average_height\` varchar(255) NOT NULL, \`skin_colors\` varchar(255) NOT NULL, \`hair_colors\` varchar(255) NOT NULL, \`eye_colors\` varchar(255) NOT NULL, \`average_lifespan\` varchar(255) NOT NULL, \`language\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`edited\` varchar(255) NOT NULL, \`homeworldId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`starships_films_films\` (\`starshipsId\` int NOT NULL, \`filmsId\` int NOT NULL, INDEX \`IDX_46d44d404f4456ffd9844b199b\` (\`starshipsId\`), INDEX \`IDX_98f924110ceb5aea4d7378ab38\` (\`filmsId\`), PRIMARY KEY (\`starshipsId\`, \`filmsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`starships_images_images\` (\`starshipsId\` int NOT NULL, \`imagesId\` int NOT NULL, INDEX \`IDX_6ba9facf1e7fa0402e175bd14c\` (\`starshipsId\`), INDEX \`IDX_6ec08db971a491169d4f979cb9\` (\`imagesId\`), PRIMARY KEY (\`starshipsId\`, \`imagesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles_films_films\` (\`vehiclesId\` int NOT NULL, \`filmsId\` int NOT NULL, INDEX \`IDX_7b4cb950bab7edfc0a92351cdd\` (\`vehiclesId\`), INDEX \`IDX_5e2fb2eb3483ccdba246e1fcb3\` (\`filmsId\`), PRIMARY KEY (\`vehiclesId\`, \`filmsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles_images_images\` (\`vehiclesId\` int NOT NULL, \`imagesId\` int NOT NULL, INDEX \`IDX_9fb7f61efd2824f333df86e113\` (\`vehiclesId\`), INDEX \`IDX_a85e6727b692801fa3e9fe4f33\` (\`imagesId\`), PRIMARY KEY (\`vehiclesId\`, \`imagesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films_images_images\` (\`filmsId\` int NOT NULL, \`imagesId\` int NOT NULL, INDEX \`IDX_a14f83691aa501a2c80de01410\` (\`filmsId\`), INDEX \`IDX_8d82deb0795ffc26e63eba3615\` (\`imagesId\`), PRIMARY KEY (\`filmsId\`, \`imagesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`planets_films_films\` (\`planetsId\` int NOT NULL, \`filmsId\` int NOT NULL, INDEX \`IDX_fb27cd4913415c3a51818eda84\` (\`planetsId\`), INDEX \`IDX_0d7eb62f80e794b5701ad7a8ff\` (\`filmsId\`), PRIMARY KEY (\`planetsId\`, \`filmsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`planets_images_images\` (\`planetsId\` int NOT NULL, \`imagesId\` int NOT NULL, INDEX \`IDX_4fba6dfbcb543df95910c3405b\` (\`planetsId\`), INDEX \`IDX_33962a3e03fb96959547b3fe35\` (\`imagesId\`), PRIMARY KEY (\`planetsId\`, \`imagesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_films_films\` (\`peopleId\` int NOT NULL, \`filmsId\` int NOT NULL, INDEX \`IDX_be3d4bf0a2a829c091594359de\` (\`peopleId\`), INDEX \`IDX_80ce66926f5e215472c235a3a6\` (\`filmsId\`), PRIMARY KEY (\`peopleId\`, \`filmsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_species_species\` (\`peopleId\` int NOT NULL, \`speciesId\` int NOT NULL, INDEX \`IDX_d6d545e4740ee652e6f79e9ffd\` (\`peopleId\`), INDEX \`IDX_9232984d4ee14342ad97f44382\` (\`speciesId\`), PRIMARY KEY (\`peopleId\`, \`speciesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_vehicles_vehicles\` (\`peopleId\` int NOT NULL, \`vehiclesId\` int NOT NULL, INDEX \`IDX_a7b8cbe95c602d58ade9845ce6\` (\`peopleId\`), INDEX \`IDX_f872d6f9465604601135f41970\` (\`vehiclesId\`), PRIMARY KEY (\`peopleId\`, \`vehiclesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_starships_starships\` (\`peopleId\` int NOT NULL, \`starshipsId\` int NOT NULL, INDEX \`IDX_78e90ed25ace2390fa2c7a4d50\` (\`peopleId\`), INDEX \`IDX_0a5517fc734c462fc3a0d32eb9\` (\`starshipsId\`), PRIMARY KEY (\`peopleId\`, \`starshipsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_images_images\` (\`peopleId\` int NOT NULL, \`imagesId\` int NOT NULL, INDEX \`IDX_0690dc4f4c6a5a6498c91d0aaf\` (\`peopleId\`), INDEX \`IDX_879150fbe14abfb9a76d4c586b\` (\`imagesId\`), PRIMARY KEY (\`peopleId\`, \`imagesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`species_films_films\` (\`speciesId\` int NOT NULL, \`filmsId\` int NOT NULL, INDEX \`IDX_15037e69b396f7e73bc515265a\` (\`speciesId\`), INDEX \`IDX_1bb7bf460101ed61435f7f806b\` (\`filmsId\`), PRIMARY KEY (\`speciesId\`, \`filmsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`species_images_images\` (\`speciesId\` int NOT NULL, \`imagesId\` int NOT NULL, INDEX \`IDX_bad71523247541d7bb0c67cd29\` (\`speciesId\`), INDEX \`IDX_9f2226add9f3b309478ca52dff\` (\`imagesId\`), PRIMARY KEY (\`speciesId\`, \`imagesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`people\` ADD CONSTRAINT \`FK_8f79bb098a482fa585da15ef3a6\` FOREIGN KEY (\`homeworldId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`species\` ADD CONSTRAINT \`FK_3427f7c92316561d7131c296bc6\` FOREIGN KEY (\`homeworldId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`starships_films_films\` ADD CONSTRAINT \`FK_46d44d404f4456ffd9844b199b1\` FOREIGN KEY (\`starshipsId\`) REFERENCES \`starships\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`starships_films_films\` ADD CONSTRAINT \`FK_98f924110ceb5aea4d7378ab381\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`starships_images_images\` ADD CONSTRAINT \`FK_6ba9facf1e7fa0402e175bd14c8\` FOREIGN KEY (\`starshipsId\`) REFERENCES \`starships\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`starships_images_images\` ADD CONSTRAINT \`FK_6ec08db971a491169d4f979cb9c\` FOREIGN KEY (\`imagesId\`) REFERENCES \`images\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`vehicles_films_films\` ADD CONSTRAINT \`FK_7b4cb950bab7edfc0a92351cddc\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`vehicles_films_films\` ADD CONSTRAINT \`FK_5e2fb2eb3483ccdba246e1fcb37\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vehicles_images_images\` ADD CONSTRAINT \`FK_9fb7f61efd2824f333df86e113e\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`vehicles_images_images\` ADD CONSTRAINT \`FK_a85e6727b692801fa3e9fe4f339\` FOREIGN KEY (\`imagesId\`) REFERENCES \`images\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`films_images_images\` ADD CONSTRAINT \`FK_a14f83691aa501a2c80de01410f\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`films_images_images\` ADD CONSTRAINT \`FK_8d82deb0795ffc26e63eba36159\` FOREIGN KEY (\`imagesId\`) REFERENCES \`images\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`planets_films_films\` ADD CONSTRAINT \`FK_fb27cd4913415c3a51818eda847\` FOREIGN KEY (\`planetsId\`) REFERENCES \`planets\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`planets_films_films\` ADD CONSTRAINT \`FK_0d7eb62f80e794b5701ad7a8ff8\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`planets_images_images\` ADD CONSTRAINT \`FK_4fba6dfbcb543df95910c3405bb\` FOREIGN KEY (\`planetsId\`) REFERENCES \`planets\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`planets_images_images\` ADD CONSTRAINT \`FK_33962a3e03fb96959547b3fe35a\` FOREIGN KEY (\`imagesId\`) REFERENCES \`images\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` ADD CONSTRAINT \`FK_be3d4bf0a2a829c091594359de7\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` ADD CONSTRAINT \`FK_80ce66926f5e215472c235a3a61\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` ADD CONSTRAINT \`FK_d6d545e4740ee652e6f79e9ffd5\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` ADD CONSTRAINT \`FK_9232984d4ee14342ad97f443824\` FOREIGN KEY (\`speciesId\`) REFERENCES \`species\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` ADD CONSTRAINT \`FK_a7b8cbe95c602d58ade9845ce63\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` ADD CONSTRAINT \`FK_f872d6f9465604601135f419704\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_starships_starships\` ADD CONSTRAINT \`FK_78e90ed25ace2390fa2c7a4d50c\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_starships_starships\` ADD CONSTRAINT \`FK_0a5517fc734c462fc3a0d32eb99\` FOREIGN KEY (\`starshipsId\`) REFERENCES \`starships\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_images_images\` ADD CONSTRAINT \`FK_0690dc4f4c6a5a6498c91d0aaf8\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_images_images\` ADD CONSTRAINT \`FK_879150fbe14abfb9a76d4c586b0\` FOREIGN KEY (\`imagesId\`) REFERENCES \`images\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`species_films_films\` ADD CONSTRAINT \`FK_15037e69b396f7e73bc515265a8\` FOREIGN KEY (\`speciesId\`) REFERENCES \`species\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`species_films_films\` ADD CONSTRAINT \`FK_1bb7bf460101ed61435f7f806b3\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`species_images_images\` ADD CONSTRAINT \`FK_bad71523247541d7bb0c67cd29c\` FOREIGN KEY (\`speciesId\`) REFERENCES \`species\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`species_images_images\` ADD CONSTRAINT \`FK_9f2226add9f3b309478ca52dff6\` FOREIGN KEY (\`imagesId\`) REFERENCES \`images\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`species_images_images\` DROP FOREIGN KEY \`FK_9f2226add9f3b309478ca52dff6\``);
        await queryRunner.query(`ALTER TABLE \`species_images_images\` DROP FOREIGN KEY \`FK_bad71523247541d7bb0c67cd29c\``);
        await queryRunner.query(`ALTER TABLE \`species_films_films\` DROP FOREIGN KEY \`FK_1bb7bf460101ed61435f7f806b3\``);
        await queryRunner.query(`ALTER TABLE \`species_films_films\` DROP FOREIGN KEY \`FK_15037e69b396f7e73bc515265a8\``);
        await queryRunner.query(`ALTER TABLE \`people_images_images\` DROP FOREIGN KEY \`FK_879150fbe14abfb9a76d4c586b0\``);
        await queryRunner.query(`ALTER TABLE \`people_images_images\` DROP FOREIGN KEY \`FK_0690dc4f4c6a5a6498c91d0aaf8\``);
        await queryRunner.query(`ALTER TABLE \`people_starships_starships\` DROP FOREIGN KEY \`FK_0a5517fc734c462fc3a0d32eb99\``);
        await queryRunner.query(`ALTER TABLE \`people_starships_starships\` DROP FOREIGN KEY \`FK_78e90ed25ace2390fa2c7a4d50c\``);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` DROP FOREIGN KEY \`FK_f872d6f9465604601135f419704\``);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` DROP FOREIGN KEY \`FK_a7b8cbe95c602d58ade9845ce63\``);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` DROP FOREIGN KEY \`FK_9232984d4ee14342ad97f443824\``);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` DROP FOREIGN KEY \`FK_d6d545e4740ee652e6f79e9ffd5\``);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` DROP FOREIGN KEY \`FK_80ce66926f5e215472c235a3a61\``);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` DROP FOREIGN KEY \`FK_be3d4bf0a2a829c091594359de7\``);
        await queryRunner.query(`ALTER TABLE \`planets_images_images\` DROP FOREIGN KEY \`FK_33962a3e03fb96959547b3fe35a\``);
        await queryRunner.query(`ALTER TABLE \`planets_images_images\` DROP FOREIGN KEY \`FK_4fba6dfbcb543df95910c3405bb\``);
        await queryRunner.query(`ALTER TABLE \`planets_films_films\` DROP FOREIGN KEY \`FK_0d7eb62f80e794b5701ad7a8ff8\``);
        await queryRunner.query(`ALTER TABLE \`planets_films_films\` DROP FOREIGN KEY \`FK_fb27cd4913415c3a51818eda847\``);
        await queryRunner.query(`ALTER TABLE \`films_images_images\` DROP FOREIGN KEY \`FK_8d82deb0795ffc26e63eba36159\``);
        await queryRunner.query(`ALTER TABLE \`films_images_images\` DROP FOREIGN KEY \`FK_a14f83691aa501a2c80de01410f\``);
        await queryRunner.query(`ALTER TABLE \`vehicles_images_images\` DROP FOREIGN KEY \`FK_a85e6727b692801fa3e9fe4f339\``);
        await queryRunner.query(`ALTER TABLE \`vehicles_images_images\` DROP FOREIGN KEY \`FK_9fb7f61efd2824f333df86e113e\``);
        await queryRunner.query(`ALTER TABLE \`vehicles_films_films\` DROP FOREIGN KEY \`FK_5e2fb2eb3483ccdba246e1fcb37\``);
        await queryRunner.query(`ALTER TABLE \`vehicles_films_films\` DROP FOREIGN KEY \`FK_7b4cb950bab7edfc0a92351cddc\``);
        await queryRunner.query(`ALTER TABLE \`starships_images_images\` DROP FOREIGN KEY \`FK_6ec08db971a491169d4f979cb9c\``);
        await queryRunner.query(`ALTER TABLE \`starships_images_images\` DROP FOREIGN KEY \`FK_6ba9facf1e7fa0402e175bd14c8\``);
        await queryRunner.query(`ALTER TABLE \`starships_films_films\` DROP FOREIGN KEY \`FK_98f924110ceb5aea4d7378ab381\``);
        await queryRunner.query(`ALTER TABLE \`starships_films_films\` DROP FOREIGN KEY \`FK_46d44d404f4456ffd9844b199b1\``);
        await queryRunner.query(`ALTER TABLE \`species\` DROP FOREIGN KEY \`FK_3427f7c92316561d7131c296bc6\``);
        await queryRunner.query(`ALTER TABLE \`people\` DROP FOREIGN KEY \`FK_8f79bb098a482fa585da15ef3a6\``);
        await queryRunner.query(`DROP INDEX \`IDX_9f2226add9f3b309478ca52dff\` ON \`species_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_bad71523247541d7bb0c67cd29\` ON \`species_images_images\``);
        await queryRunner.query(`DROP TABLE \`species_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_1bb7bf460101ed61435f7f806b\` ON \`species_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_15037e69b396f7e73bc515265a\` ON \`species_films_films\``);
        await queryRunner.query(`DROP TABLE \`species_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_879150fbe14abfb9a76d4c586b\` ON \`people_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_0690dc4f4c6a5a6498c91d0aaf\` ON \`people_images_images\``);
        await queryRunner.query(`DROP TABLE \`people_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_0a5517fc734c462fc3a0d32eb9\` ON \`people_starships_starships\``);
        await queryRunner.query(`DROP INDEX \`IDX_78e90ed25ace2390fa2c7a4d50\` ON \`people_starships_starships\``);
        await queryRunner.query(`DROP TABLE \`people_starships_starships\``);
        await queryRunner.query(`DROP INDEX \`IDX_f872d6f9465604601135f41970\` ON \`people_vehicles_vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_a7b8cbe95c602d58ade9845ce6\` ON \`people_vehicles_vehicles\``);
        await queryRunner.query(`DROP TABLE \`people_vehicles_vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_9232984d4ee14342ad97f44382\` ON \`people_species_species\``);
        await queryRunner.query(`DROP INDEX \`IDX_d6d545e4740ee652e6f79e9ffd\` ON \`people_species_species\``);
        await queryRunner.query(`DROP TABLE \`people_species_species\``);
        await queryRunner.query(`DROP INDEX \`IDX_80ce66926f5e215472c235a3a6\` ON \`people_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_be3d4bf0a2a829c091594359de\` ON \`people_films_films\``);
        await queryRunner.query(`DROP TABLE \`people_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_33962a3e03fb96959547b3fe35\` ON \`planets_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_4fba6dfbcb543df95910c3405b\` ON \`planets_images_images\``);
        await queryRunner.query(`DROP TABLE \`planets_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_0d7eb62f80e794b5701ad7a8ff\` ON \`planets_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_fb27cd4913415c3a51818eda84\` ON \`planets_films_films\``);
        await queryRunner.query(`DROP TABLE \`planets_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_8d82deb0795ffc26e63eba3615\` ON \`films_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_a14f83691aa501a2c80de01410\` ON \`films_images_images\``);
        await queryRunner.query(`DROP TABLE \`films_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_a85e6727b692801fa3e9fe4f33\` ON \`vehicles_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_9fb7f61efd2824f333df86e113\` ON \`vehicles_images_images\``);
        await queryRunner.query(`DROP TABLE \`vehicles_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_5e2fb2eb3483ccdba246e1fcb3\` ON \`vehicles_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_7b4cb950bab7edfc0a92351cdd\` ON \`vehicles_films_films\``);
        await queryRunner.query(`DROP TABLE \`vehicles_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_6ec08db971a491169d4f979cb9\` ON \`starships_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_6ba9facf1e7fa0402e175bd14c\` ON \`starships_images_images\``);
        await queryRunner.query(`DROP TABLE \`starships_images_images\``);
        await queryRunner.query(`DROP INDEX \`IDX_98f924110ceb5aea4d7378ab38\` ON \`starships_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_46d44d404f4456ffd9844b199b\` ON \`starships_films_films\``);
        await queryRunner.query(`DROP TABLE \`starships_films_films\``);
        await queryRunner.query(`DROP TABLE \`species\``);
        await queryRunner.query(`DROP TABLE \`people\``);
        await queryRunner.query(`DROP TABLE \`planets\``);
        await queryRunner.query(`DROP TABLE \`films\``);
        await queryRunner.query(`DROP TABLE \`vehicles\``);
        await queryRunner.query(`DROP TABLE \`starships\``);
        await queryRunner.query(`DROP TABLE \`images\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
