import { AvatarIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "src/app/_components/sheet";
import { Variant } from "src/app/_components/variant";
import { Login } from "./Login";
import { UserWrap } from "./styled";
import Link from "next/link";

export const UserButton = () => (
  <Link href="/signin">
    <Variant className="mx-6" size="icon" variant="link">
      <AvatarIcon className="h-[20px] w-[20px]" />
    </Variant>
  </Link>
);

export const UserLogin = () => (
  <Sheet>
    <UserButton />
    <SheetContent side="right" className={``}>
      <SheetHeader>
        <SheetTitle>Login to your account</SheetTitle>
        <SheetDescription>
          Sign in with email or use your Google account.
        </SheetDescription>
      </SheetHeader>
      <Login />
    </SheetContent>
  </Sheet>
);

export const User = () => (
  <UserWrap>
    <UserButton />
  </UserWrap>
);
