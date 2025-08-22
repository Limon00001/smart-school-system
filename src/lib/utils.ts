/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 22 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { auth } from '@clerk/nextjs/server';

/**
 * Get Current User Function
 */
const getCurrentUser = async () => {
  try {
    // Get Current User
    const { userId, sessionClaims } = await auth();

    return {
      userId,
      role: (sessionClaims?.metadata as { role?: string })?.role,
    };
  } catch (error) {
    console.error(`Error fetching user from utils: ${error}`);
  }
};

// export
export { getCurrentUser };
