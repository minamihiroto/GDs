class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :image_url
      t.string :sns_url_fb
      t.string :sns_url_tw
      t.text :profile
      

      t.timestamps
    end
  end
end
