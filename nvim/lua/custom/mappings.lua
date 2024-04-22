local M = {}

-- M.general = {
--   n = {
--     ['C-h'] = { "<cmd> TmuxNavigateLeft<CR>", "window left"},
--     ['C-l'] = { "<cmd> TmuxNavigateRight<CR>", "window right"},
--     ['C-j'] = { "<cmd> TmuxNavigateDown<CR>", "window down"},
--     ['C-k'] = { "<cmd> TmuxNavigateUp<CR>", "window up"},
--   }
-- }

M.harpoon = {
  n = {
    ["<leader>a"] = {
      function ()
        require("harpoon.mark").add_file()
      end,
      "Mark file"
    },
    ["<leader>fpf"] = {
      function()
        local current_file = vim.api.nvim_buf_get_name(0)
        if string.match(current_file, "%.py$") then
          vim.cmd("!black -l 79 " .. current_file)
        else
          print("Not a Python file!")
        end
      end,
      "Format current Python file",
    },
    ["<leader>fpd"] = {
      function()
        local current_dirend = vim.fn.expand("%:p:h")
        -- Call black on the directory
        vim.cmd("!black -l 79 " .. current_dirend)
      end,
      "Format current Python directory",
    },

    ["<C-e>"] = {
      function ()
        require('harpoon.ui').toggle_quick_menu()
      end,
      "Toggle UI"
    },
    ["<leader>1"] = {
      function ()
        require('harpoon.ui').nav_file(1)
      end,
      "Go to file 1"
    },
    ["<leader>2"] = {
      function ()
        require('harpoon.ui').nav_file(2)
      end,
      "Go to file 2"
    },
    ["<leader>3"] = {
      function ()
        require('harpoon.ui').nav_file(3)
      end,
      "Go to file 3"
    },
    ["<leader>4"] = {
      function ()
        require('harpoon.ui').nav_file(4)
      end,
      "Go to file 4"
    },
  }
}

M.dap = {
  plugin = true,
  n = {
    ["<leader>db"] = {"<cmd> DapToggleBreakpoint <CR>"}
  }
}

M.dap_python = {
  plugin = true,
  n = {
    ["<leader>dpr"] = {
      function()
        require("dap-python").test_method()
      end
    }
  }
}

return M
