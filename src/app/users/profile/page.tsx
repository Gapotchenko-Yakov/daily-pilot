import { UserProfileForm } from "@/components/user/UserProfileForm";
import { User } from "@prisma/client";
import React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const UserProfilePage = async () => {
  const userEmail = "alice@example.com";
  const userRes = await fetch(`${baseUrl}/api/users/${userEmail}`);

  if (!userRes.ok) {
    throw new Error("Failed to fetch finances");
  }
  const user: User = await userRes.json();

  return (
    <div>
      <UserProfileForm user={user} />
    </div>
  );
};

export default UserProfilePage;
