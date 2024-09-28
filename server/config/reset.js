import { pool } from "./database.js"; // Ensure this is your configured PostgreSQL connection
import "./dotenv.js";
import giftData from "../data/gifts.js"

// Function to create the gifts table
const createGiftsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS gifts;

    CREATE TABLE IF NOT EXISTS gifts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      pricePoint VARCHAR(10) NOT NULL,
      audience VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      submittedBy VARCHAR(255) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    );
  `;

  try {
    // Execute the query to drop and create the gifts table
    const res = await pool.query(createTableQuery);
    console.log("🎉 gifts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating gifts table", err);
  }
};

// Function to seed the gifts table with data
const seedGiftsTable = async () => {
  // First, ensure the table is created
  await createGiftsTable();

  try {
    // Traverse through giftData and insert each gift into the database
    giftData.forEach((gift) => {
      const insertQuery = {
        text: `
          INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `,
      };

      const values = [
        gift.name,
        gift.pricePoint,
        gift.audience,
        gift.image,
        gift.description,
        gift.submittedBy,
        gift.submittedOn,
      ];

      // Insert each gift into the database
      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error("⚠️ error inserting gift", err);
          return;
        }

        console.log(`✅ ${gift.name} added successfully`);
      });
    });
  } catch (err) {
    console.error("⚠️ error seeding gifts data", err);
  }
};

// Call the seed function to create the table and insert the data
seedGiftsTable();
