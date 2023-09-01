import { getContacts, createContact, getContact } from "../contacts";
import { Params as ParamsType } from "./types";

export async function rootLoader() {
  const contacts = await getContacts();
  return contacts;
}

export async function contactLoader({ params }: { params: ParamsType }) {
  const contact = await getContact(params.contactId ?? "");
  return contact;
}

export async function action() {
  const contact = await createContact();
  return { contact };
}
