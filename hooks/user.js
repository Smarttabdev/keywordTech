import useSWR from 'swr';
import fetcher from 'lib/fetch';

export function useCurrentUser()
{
  const { data, mutate } = useSWR('/api/user', fetcher);
  // console.log('--------------here-----------------', data, mutate);

  const user = data?.user;
  return [user, { mutate }];
}

export function useUser(id)
{
  const { data } = useSWR(`/api/users/${id}`, fetcher, { revalidateOnFocus: false });
  return data?.user;
}
