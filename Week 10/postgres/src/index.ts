import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://test_owner:JWHpjR3boTi7@ep-snowy-mouse-a1jorxjf.ap-southeast-1.aws.neon.tech/test?sslmode=require",
});

const createUserTable = async () => {
  await client.connect();

  const result = await client.query(`CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)`);

  console.log(result);
};

const createAddressesTable = async () => {
  try {
    await client.connect();

    const result = await client.query(`CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE)`);

    console.log(result);
    console.log("Table Created");
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
};

const insertUserData = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    await client.connect();
    const inserQuery =
      "INSERT INTO users (username,password,email) VALUES($1,$2,$3)";
    const value = [username, password, email];
    const res = await client.query(inserQuery, value);
    console.log("INSERT Success");
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
};

const insertAddressData = async (
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string
) => {
  try {
    await client.connect();
    const inserQuery =
      "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1,$2,$3,$4,$5)";
    const value = [user_id, city, country, street, pincode];
    const res = await client.query(inserQuery, value);
    console.log("INSERT Success");
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
};

const getData = async (email: string) => {
  try {
    await client.connect();
    const getdataQuery = "SELECT * FROM users WHERE email=$1";
    const value = [email];
    const result = await client.query(getdataQuery, value);
    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
};

// getData("samyaksukhdeve@gmail.com");

// createUserTable();

// insertData("samyaksukhdeve@gmail.com", "9881422305", "samyaksukhdeve27");

// createAddressesTable();

// insertAddressData(1, "New York", "USA", "123 Broadway St", "10001");
