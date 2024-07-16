import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { useRouter } from "next/router";

import {
  HeaderWrapper,
  Logo,
  Button,
  Navbar,
  LogoContainer,
  Navlink,
  NotificationButton,
} from "../../styles/header.styles";

import ExportData from "../export-data/export-data";

// import { categoriesData } from "../../data/categories";

import { getLocationFromQuery } from "../../server-store/queries/queries";

interface IHeaderProps {
  exportData?: boolean;
  removeBtn?: boolean;
}

const Header = ({ exportData, removeBtn }: IHeaderProps) => {
  const router = useRouter();
  const { query, asPath } = router;
  const queryLocation = getLocationFromQuery(query.location);

  const showDataVisualization = () => {
    router.push({
      pathname: router.pathname,
      query: { ...query, dataVisualization: true },
    });
  };

  const goToNotifications = () => {
    router.push({
      pathname: "notifications",
      query: { ...query, location: queryLocation },
    });
  };
  return (
    <HeaderWrapper>
      <Navbar>
        <LogoContainer>
          <h3 suppressHydrationWarning>
            {asPath === "/water-quality-data?location=iwaya" && "iwaya"}
            {asPath === "/iwaya/data-visualization" && "iwaya"}
            {asPath === "/notifications?location=iwaya" && "iwaya"}
          </h3>

          <h3 suppressHydrationWarning>
            {asPath === "/water-quality-data?location=bariga" && "bariga"}
            {asPath === "/bariga/data-visualization" && "bariga"}
            {asPath === "/notifications?location=bariga" && "bariga"}
          </h3>
          {
            <Logo>
              <Image src="/locationpin.png" alt="logo" fill sizes="100%" />
            </Logo>
          }
        </LogoContainer>
        <h5>water status</h5>
      </Navbar>
      <Navlink>
        <ul>
          <li>
            <NotificationButton>
              <button onClick={goToNotifications}>
                {" "}
                <FaBell />
              </button>
            </NotificationButton>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            {!exportData ? (
              <button onClick={showDataVisualization}>
                Data Visualization
              </button>
            ) : (
              <ExportData
                // data={categoriesData}
                fileName="water-probability-status"
              />
            )}
          </li>
        </ul>
      </Navlink>
    </HeaderWrapper>
  );
};

export default Header;
