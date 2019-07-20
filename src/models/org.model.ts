import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Org extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  organization_type_id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  logo_url?: string;

  @property({
    type: 'string',
  })
  map_url?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Org>) {
    super(data);
  }
}

export interface OrgRelations {
  // describe navigational properties here
}

export type OrgWithRelations = Org & OrgRelations;
