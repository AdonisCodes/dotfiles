home=$HOME
zshrc_dir=$home/.config/zshrc

# Load Envs
source $zshrc_dir/dotenv.zsh

# Load path
source $zshrc_dir/path.zsh

# Load Aliases
source $zshrc_dir/aliases.zsh

source $zshrc_dir/prompt.zsh

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/simonferns/mambaforge/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/simonferns/mambaforge/etc/profile.d/conda.sh" ]; then
        . "/Users/simonferns/mambaforge/etc/profile.d/conda.sh"
    else
        export PATH="/Users/simonferns/mambaforge/bin:$PATH"
    fi
fi
unset __conda_setup

if [ -f "/Users/simonferns/mambaforge/etc/profile.d/mamba.sh" ]; then
    . "/Users/simonferns/mambaforge/etc/profile.d/mamba.sh"
fi


export PATH=$PATH:/Users/simonferns/.spicetify
export GOENV_ROOT="$HOME/.goenv"
export PATH="$GOENV_ROOT/bin:$PATH"
eval "$(goenv init -)"
export PATH="$GOROOT/bin:$PATH"
export PATH="$PATH:$GOPATH/bin"


autoload -U zmv

