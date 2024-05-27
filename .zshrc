home=$HOME
zshrc_dir=$home/.config/zshrc

# Load Envs
source $zshrc_dir/dotenv.zsh

# Load path
source $zshrc_dir/path.zsh

# Load Aliases
source $zshrc_dir/aliases.zsh

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/simonferns/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/simonferns/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/simonferns/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/simonferns/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


export PATH=$PATH:/Users/simonferns/.spicetify
