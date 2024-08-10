local colors = require("colors")
local icons = require("icons")
local settings = require("settings")

local brightness_percent = sbar.add("item", "widgets.brightness1", {
	position = "right",
	icon = { drawing = false },
	label = {
		string = "??%",
		padding_left = -1,
		font = { family = settings.font.numbers },
	},
})

local brightness_icon = sbar.add("item", "widgets.brightness2", {
	position = "right",
	padding_right = -1,
	icon = {
		string = icons.brightness._100,
		width = 0,
		align = "left",
		color = colors.grey,
		font = {
			style = settings.font.style_map["Regular"],
			size = 14.0,
		},
	},
	label = {
		width = 0,
		align = "left",
		font = {
			style = settings.font.style_map["Regular"],
			size = 14.0,
		},
	},
})

local brightness_bracket = sbar.add("bracket", "widgets.brightness.bracket", {
	brightness_icon.name,
	brightness_percent.name,
}, {
	background = { color = colors.bg1 },
	popup = { align = "center" },
})

sbar.add("item", "widgets.brightness.padding", {
	position = "right",
	width = settings.group_paddings,
})

brightness_percent:subscribe("brightness_change", function(env)
	local brightness = tonumber(env.INFO)
	local icon = icons.brightness._0
	if brightness > 60 then
		icon = icons.brightness._100
	elseif brightness > 30 then
		icon = icons.brightness._66
	elseif brightness > 10 then
		icon = icons.brightness._33
	elseif brightness > 0 then
		icon = icons.brightness._10
	end

	local lead = ""
	if brightness < 10 then
		lead = "0"
	end

	brightness_icon:set({ label = icon })
	brightness_percent:set({ label = lead .. brightness .. "%" })
end)
