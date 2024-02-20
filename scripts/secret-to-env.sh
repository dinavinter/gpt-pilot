for secret_file in $(find /run/secrets -name '*.env'); do
    export "$(basename "${secret_file%.env}")"="$(cat "$secret_file")"
done

# Chain with existing entrypoint (if any)
exec "$@"
