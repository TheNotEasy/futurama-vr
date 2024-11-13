'use server'

import { Admin, IRequest, Request } from "@/app/db";

export async function createRequest(data: any) {
  const request = Request.build(data) as IRequest;
  await request.save();

  return request.id;
}

export async function updateRequest(data: any, id: string) {
  return await Request.update(data, { where: { id: id } });
}

export async function getRequest(id: string): Promise<IRequest> {
  const instance = await Request.findOne({where: {id: id}});
  return instance?.toJSON() as IRequest;
}

export async function authAdmin(login: string, password: string) {
  const instance = await Admin.findOne({where: {username: login, password: password}});
  return Boolean(instance);
}

export async function listActiveRequests() {
  const instances = await Request.findAll({where: {state: 'waiting'}});
  return instances.map((instance) => instance.toJSON());
}

export async function listArchiveRequests() {
  const instances = await Request.findAll({where: {state: 'declined'}});
  const instances2 = await Request.findAll({where: {state: 'approved'}});

  return [...instances, ...instances2].map((instance) => instance.toJSON());
}

export async function responde(id: string, status: string) {
  const instance = await Request.findOne({where: {id: id}}) as IRequest | null;
  if (instance === null) return;
  instance.state = status;
  await instance.save();
}
