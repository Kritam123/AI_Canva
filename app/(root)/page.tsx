import { UserButton, currentUser } from "@clerk/nextjs";
export default async function Home() {
  return (
    <>
    <UserButton afterSignOutUrl="/"/>
    </>
  );
}
