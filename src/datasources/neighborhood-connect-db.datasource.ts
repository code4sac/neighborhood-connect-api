import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './neighborhood-connect-db.datasource.json';

export class NeighborhoodConnectDbDataSource extends juggler.DataSource {
  static dataSourceName = 'NeighborhoodConnectDb';

  constructor(
    @inject('datasources.config.NeighborhoodConnectDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
