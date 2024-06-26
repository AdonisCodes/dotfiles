require "core"

local function set_pythonpath()
    local current_path = vim.fn.getcwd()
    local venv_path = current_path .. "/venv/bin/activate"
    local python_version = vim.fn.systemlist('python3 --version')[1]:match('%d+%.%d+')

    if vim.fn.filereadable(venv_path) == 1 then
        local site_packages_path = current_path .. "/venv/lib/python" .. python_version .. "/site-packages"
        if vim.fn.isdirectory(site_packages_path) == 1 then
            vim.env.PYTHONPATH = site_packages_path .. ":" .. (vim.env.PYTHONPATH or "")
        end
    else
        print("No virtual environment found.")
    end
end

set_pythonpath()

local custom_init_path = vim.api.nvim_get_runtime_file("lua/custom/init.lua", false)[1]

if custom_init_path then
  dofile(custom_init_path)
end

require("core.utils").load_mappings()

local lazypath = vim.fn.stdpath "data" .. "/lazy/lazy.nvim"

-- bootstrap lazy.nvim!
if not vim.loop.fs_stat(lazypath) then
  require("core.bootstrap").gen_chadrc_template()
  require("core.bootstrap").lazy(lazypath)
end

dofile(vim.g.base46_cache .. "defaults")
vim.opt.rtp:prepend(lazypath)
vim.g.skip_ts_context_commentstring_module = true

vim.o.guicursor = "n-v-c-sm:block,ci-ve:ver25,r-cr-o:hor20,i:block-blinkwait700-blinkoff400-blinkon250-Cursor/lCursor"

require "plugins"

if vim.g.neovide then
  vim.g.neovide_cursor_animation_length = 0.05
  vim.g.neovide_cursor_animate_in_insert_mode = true
  vim.g.neovide_cursor_vfx_mode = "railgun"
  vim.g.neovide_cursor_vfx_opacity = 500.0
  vim.g.neovide_cursor_vfx_particle_density = 10
  vim.o.guifont = "Source Code Pro:h10" -- text below applies for VimScript
end



