# == Schema Information
#
# Table name: rsvps
#
#  id        :bigint           not null, primary key
#  user_id   :integer          not null
#  event_id  :integer          not null
#  attending :boolean          default(FALSE), not null
#

class Rsvp < ApplicationRecord
    # validates :user_id, :event_id, :attending, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event

end


