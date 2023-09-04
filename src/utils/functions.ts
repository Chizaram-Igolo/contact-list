import { redirect } from "react-router-dom";
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from "../contacts";
import { Params as ParamsType } from "./types";

export async function rootLoader() {
  const contacts = await getContacts();
  return contacts;
}

export async function contactLoader({ params }: { params: ParamsType }) {
  const contact = await getContact(params.contactId ?? "");
  return contact;
}

export async function rootAction() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function editAction({
  request,
  params,
}: {
  request: Request;
  params: ParamsType;
}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId ?? "", updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function destroyAction({ params }: { params: ParamsType }) {
  throw new Error("oh dang!");
  await deleteContact(params.contactId ?? "");
  return redirect("/");
}
