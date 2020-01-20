# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  eventname   :string           not null
#  description :text             not null
#  starttime   :datetime         not null
#  endtime     :datetime         not null
#  group_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :float            not null
#  lng         :float            not null
#

class Event < ApplicationRecord
    validates :eventname, :description, :lat, :lng, :starttime, :endtime, :group_id, presence: true

    belongs_to :group,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Group

    has_many :rsvps,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Rsvp

end

