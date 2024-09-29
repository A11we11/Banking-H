import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
/* import RecentTransactions from "@/components/RecentTransactions";
   
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions"; */

import RightSidebar from "@/components/RightSidebar";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  /* const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  }); */

  /* if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
 */

  const loggedIn = {
    firstName: "Allwell",
    lastName: "ogbonna",
    email: "ogbonnaallwell1999@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            /*  accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance} */
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.2}
          />
        </header>

        {/*   <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      <RightSidebar
        /* user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)} */
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
      />
    </section>
  );
};

export default Home;
