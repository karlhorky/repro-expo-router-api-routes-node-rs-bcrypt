import { hashSync } from '@node-rs/bcrypt';

export function GET(request: Request) {
  const hash = hashSync('hello world');
  return Response.json({ hash: 'hash' });
}
