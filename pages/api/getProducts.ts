import { query as q } from 'faunadb';
import { faunaClient } from '../../src/lib/fauna';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:any, res:any) => {
  if (req.method == 'GET') {
    let query = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('products'))),
        q.Lambda((show) => q.Get(show))
      )
    );
    res.status(200).json({ data: query.data });
  }
};