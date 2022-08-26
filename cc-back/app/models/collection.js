const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Collection extends CoreDatamapper {
    static tableName = 'collection';

    static async create(newCollection) {
        const result = await client.query(
            `INSERT INTO "collection" (name, description, media, category_id) 
             VALUES ($1, $2, $3, $4) 
             RETURNING *
            `,
            [
                newCollection.name,
                newCollection.description,
                newCollection.media,
                newCollection.category_id,
            ],
        );
        return result.rows[0];
    }

    static async getByCategoriesId(id) {
        const result = await client.query(
            `SELECT * FROM "collection" 
            WHERE "category_id" = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async update(collection) {
        const result = await client.query(
            `
            UPDATE "collection"
            SET 
                "name" = $2,
                "description" = $3,
                "media" = $4,
                "category_id" = $5 

            WHERE id = $1
            RETURNING *
        `,

            [
                collection.id,
                collection.name,
                collection.description,
                collection.media,
                collection.category_id,
            ],
        );
        return result.rows[0];
    }
};
