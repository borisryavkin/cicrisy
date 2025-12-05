import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
})

export const userProfiles = sqliteTable("user_profiles", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  size: text("size"), // XS, S, M, L, XL, XXL
  stylePreference: text("style_preference"), // "Skater", "Streetwear", "Mixed"
  mysteryBoxPreferences: text("mystery_box_preferences"), // JSON string
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
})

export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  items: text("items").notNull(), // JSON string
  total: integer("total").notNull(),
  status: text("status").notNull(), // "pending", "completed", "cancelled"
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
})

