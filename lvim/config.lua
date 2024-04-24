lvim.builtin.telescope.defaults.initial_mode = "insert"
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 120
lvim.builtin.telescope.defaults.layout_config.prompt_position = "bottom"
lvim.builtin.telescope.defaults.layout_config.width = 0.75
lvim.builtin.telescope.defaults.layout_strategy = "horizontal"

lvim.plugins = {
  {
    "tpope/vim-fugitive",
    event = "VeryLazy",
    dependencies = {
      "tpope/vim-rhubarb",
      "tpope/vim-obsession",
      "tpope/vim-unimpaired",
    },
  },
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    config = function()
    require("copilot").setup({})
    end,
  },
  {
    "zbirenbaum/copilot-cmp",
    config = function ()
    require("copilot_cmp").setup({
    suggestion = { enabled = false },
    panel = { enabled = false }
    })
    end
  }
}

local has_words_before = function()
if vim.api.nvim_buf_get_option(0, "buftype") == "prompt" then return false end
local line, col = unpack(vim.api.nvim_win_get_cursor(0))
return col ~= 0 and vim.api.nvim_buf_get_text(0, line-1, 0, line-1, col, {})[1]:match("^%s*$") == nil
end
local on_tab = vim.schedule_wrap(function(fallback)
local cmp = require("cmp")
if cmp.visible() and has_words_before() then
cmp.select_next_item({ behavior = cmp.SelectBehavior.Select })
else
fallback()
end
end)
lvim.builtin.cmp.mapping["<Tab>"] = on_tab

