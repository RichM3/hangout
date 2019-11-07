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
    validates :user_id, :event_id, :attending, presence: true

    belongs_to :user

    belongs_to :event

end


