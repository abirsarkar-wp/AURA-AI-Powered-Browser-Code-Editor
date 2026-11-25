# Troubleshooting

| Symptom | Likely cause | Safe resolution |
| --- | --- | --- |
| Sign-in fails or loops | OAuth callback/secret mismatch | Confirm `AUTH_*` values and provider callback URL; restart the dev server. |
| Prisma cannot connect | Invalid or unreachable `DATABASE_URL` | Check Atlas network access, database user, and connection string without publishing it. |
| Template request fails | Missing starter folder or inaccessible deployment filesystem | Keep all six `vibecode-starters` directories in the deployment artifact. |
| Preview never becomes ready | Browser isolation, unsupported browser, install failure, or template server issue | Use a supported browser, inspect the embedded terminal, and confirm COOP/COEP headers are preserved. |
| AI returns an error | Ollama is unavailable or `codellama:latest` is missing | Start Ollama locally and pull/configure the model used by the routes. |
| Completion says unavailable | Local AI request failed | Inspect the Ollama service and server console; this fallback is intentional. |
| `npm run lint` fails immediately | Root script uses legacy `next lint` | Run the configured command to confirm; update the script deliberately if maintaining the project. |
