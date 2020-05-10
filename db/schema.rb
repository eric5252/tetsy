# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_10_003340) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.string "favoriteable_type"
    t.bigint "favoriteable_id"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["favoriteable_type", "favoriteable_id"], name: "index_favorites_on_favoriteable_type_and_favoriteable_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "price", null: false
    t.integer "shop_id"
    t.integer "category_id"
    t.integer "quantity"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "body"
    t.integer "product_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_reviews_on_product_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "name"
    t.integer "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_shops_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gender"
    t.string "city"
    t.date "birthday"
    t.text "about"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
