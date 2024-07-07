local options = {
  ensure_installed = { "python-lsp-server",
        "html-lsp",
        "css-lsp",
        "css-variables-language-server",
        "eslint-lsp",
        "prettier",
        "pyright",
        "emmet-language-server",
        "typescript-language-server",
        "tailwindcss-language-server",
        "prisma-language-server",
        "lua-language-server",
        "mypy",
        "ruff",
        "black",
        "debugpy",
  }, -- not an option from mason.nvim

  PATH = "skip",

  ui = {
    icons = {
      package_pending = " ",
      package_installed = "󰄳 ",
      package_uninstalled = " 󰚌",
    },

    keymaps = {
      toggle_server_expand = "<CR>",
      install_server = "i",
      update_server = "u",
      check_server_version = "c",
      update_all_servers = "U",
      check_outdated_servers = "C",
      uninstall_server = "X",
      cancel_installation = "<C-c>",
    },
  },

  max_concurrent_installers = 10,
}

return options
