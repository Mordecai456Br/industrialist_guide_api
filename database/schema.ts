
import { uuid, integer,  pgTable, varchar, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  username: varchar("username").notNull().unique(), 
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  credits: integer("credits").notNull().default(0),
  role: varchar("role", { length: 50 }).notNull().default("user"),
});

