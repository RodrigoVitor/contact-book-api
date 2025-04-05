const { connect } = require("../Database/config");

async function getAllContact(req, res) {
  let client;
  try {
    client = await connect();

    const data = await client.query("SELECT * FROM contacts");

    return res.status(200).json(data.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error no servidor" });
  } finally {
    if (client) client.release();
  }
}

async function storeContact(req, res) {
  let client;
  try {
    client = await connect();
    const { name, email, whatsapp } = req.body;
    if (name && whatsapp) {
      const data = await client.query(
        "INSERT INTO contacts(name, email, whatsapp) VALUES($1,$2,$3)",
        [name, email, whatsapp]
      );
      return res.status(201).json({ message: "Contact created" });
    }
    return res
      .status(400)
      .json({ message: "Fill in the name and whatsapp field" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in Servidor" });
  } finally {
    if (client) client.release();
  }
}

async function deleteContact(req, res) {
  let client;
  try {
    client = await connect();
    const { id } = req.params;
    const data = await client.query("DELETE FROM contacts WHERE id=$1", [id]);
    return res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error in Servidor" });
  } finally {
    if (client) client.release();
  }
}

async function getContactById(req, res) {
  let client;
  try {
    client = await connect();
    const { id } = req.params;
    const data = await client.query("SELECT * FROM contacts WHERE id=$1", [id]);
    return res.status(200).json(data.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in Servidor" });
  } finally {
    if (client) client.release();
  }
}

module.exports = {
  getAllContact,
  storeContact,
  deleteContact,
  getContactById,
};
