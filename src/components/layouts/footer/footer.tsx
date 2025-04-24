import { Input } from "@/components/ui/input";
import { Facebook, Send, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Section } from "../section";
import { Container } from "../container";
import BrandLogo from "@/components/assets/brand-logo";

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-primary">
                  <BrandLogo />
                </div>
                <h4 className="text-2xl font-bold">ActionBoard</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quis
                non, fugit totam vel laboriosam vitae.
              </p>
            </div>

            {/* My Account Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">My Account</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/authors"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Authors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collection"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/author-profile"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Author Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/create-item"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Create Item
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/help-support"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/live-auctions"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Live Auctions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/item-details"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Item Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/activity"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Activity
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/explore"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-purple-500 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
              <div className="flex mb-6">
                <Input
                  type="email"
                  placeholder="info@yourgmail.com"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none border border-border"
                />
                <button className="bg-primary p-2 rounded-r-md">
                  <Send className="h-5 w-8 text-white" />
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="bg-gray-200 p-2 rounded-md dark:bg-gray-800"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-200 p-2 rounded-md dark:bg-gray-800"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-200 p-2 rounded-md dark:bg-gray-800"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-200 p-2 rounded-md dark:bg-gray-800"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
