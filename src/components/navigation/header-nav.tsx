"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  StaggeredMenu,
  StaggeredMenuItem,
} from "@/components/ui/StaggeredMenu";

const HeaderNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle section navigation
  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push("/#" + sectionId);
      return;
    }

    // Find element and scroll within container
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      const scrollContainer = document.querySelector(".container-scroll");

      if (element && scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollTop = scrollContainer.scrollTop;
        const targetScrollTop = scrollTop + elementRect.top - containerRect.top;

        scrollContainer.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Navigation items for StaggeredMenu với sections
  const navItems: StaggeredMenuItem[] = [
    {
      label: "Trang Chủ",
      ariaLabel: "Đi đến trang chủ",
      link: "/",
    },
    {
      label: "Tính tất yếu ra đời của Đảng Cộng sản Việt Nam",
      ariaLabel: "Đi đến phần Tính tất yếu ra đời của Đảng Cộng sản Việt Nam",
      link: "#main-content",
    },
    {
      label: "Vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
      ariaLabel: "Đi đến phần Vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
      link: "#leadership-role",
    },
    {
      label: "Đảng phải trong sạch lành mạnh",
      ariaLabel: "Đi đến phần Đảng phải trong sạch lành mạnh",
      link: "#hcm-thoughts",
    },
    {
      label: "Câu Hỏi",
      ariaLabel: "Đi đến trang câu hỏi",
      link: "/question",
    },
  ];

  // Add global click handler for section links
  useEffect(() => {
    const handleSectionClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]");

      if (link && link.closest(".staggered-menu-panel")) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const sectionId = href.substring(1);
          scrollToSection(sectionId);
        }
      }
    };

    document.addEventListener("click", handleSectionClick);
    return () => document.removeEventListener("click", handleSectionClick);
  }, [router, pathname]);

  // const handleMenuOpen = () => {
  //   console.log("Menu opened");
  // };

  // const handleMenuClose = () => {
  //   console.log("Menu closed");
  // };

  return (
    <StaggeredMenu
      position="right"
      colors={["#FF6B6B", "#4ECDC4"]}
      items={navItems}
      displaySocials={false}
      displayItemNumbering={true}
      className="custom-header-nav"
      menuButtonColor="#ffffff"
      openMenuButtonColor="#FF6B6B"
      accentColor="#4ECDC4"
      logoUrl="/src/assets/logos/reactbits-gh-white.svg"
      changeMenuColorOnOpen={true}
      // onMenuOpen={handleMenuOpen}
      // onMenuClose={handleMenuClose}
    />
  );
};

export default HeaderNav;
