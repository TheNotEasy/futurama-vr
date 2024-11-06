'use server'

import { IRequest, Request } from "@/app/db";

export async function createRequest(data: any) {
  const request = Request.build(data) as IRequest;
  await request.save();

  return request.id;
}

export async function updateRequest(data: any, id: string) {
  return await Request.update(data, { where: { id: id } });
}

export async function getRequest(id: string) {
  return await Request.findOne({where: { id: id }});
}