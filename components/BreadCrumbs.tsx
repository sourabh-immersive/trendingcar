"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  // Hide the breadcrumb if on the home page
  if (paths === "/") {
    return null;
  }

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="breadcrumb__row">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav aria-label="breadcrumb" className="mt-30 mb-4">
              <ol className={containerClasses}>
                <li className={listClasses}>
                  <Link href={"/"}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                  let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                  let itemClasses =
                    paths === href
                      ? `${listClasses} ${activeClasses}`
                      : listClasses;
                  let itemLink = capitalizeLinks
                    ? capitalizeFirstLetter(link.replace(/-/g, " "))
                    : link.replace(/-/g, " ");
                  return (
                    <React.Fragment key={index}>
                      <li className={itemClasses}>
                        <Link href={href}>{itemLink}</Link>
                      </li>
                      {pathNames.length !== index + 1 && separator}
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextBreadcrumb;