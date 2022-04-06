import { useMemo } from "react";
import {
  MemoryRouter,
  Routes,
  Route,
  Redirect,
} from "react-router";

function Layout () {
  const { user, loading } = useCurrentUser()

  const defaultPath = useMemo(() => {
    if (loading || !user) {
      return null;
    } else if (!user.billing) {
      return "/onboarding/billing";
    } else if (user.invoices.length === 0) {
        return "onboarding/welcome";
    } else {
      return "/";
    }
  }, [user, loading]);
  return (
    <MemoryRouter>
      <Routes >
        <Route path={"/"} component={InvoicesView} />
        <Route path={"/onboarding/billing"} component={BillingScreen} />
        <Route path={"/onboarding/profile"} component={InvoicesWelcome} />
        <Redirect to={defaultPath} />
      </Routes>
    </MemoryRouter>
  )
}

export default Layout