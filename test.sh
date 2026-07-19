#!/bin/bash

echo "=== Register ==="
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test8@email.com","name":"Test User 8","password":"123456"}'

echo -e "\n=== Login ==="
RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test8@email.com","password":"123456"}')

# Ekstrak token pakai sed (works di Git Bash)
TOKEN=$(echo "$RESPONSE" | sed -n 's/.*"token":"\([^"]*\)".*/\1/p')

echo "Token: $TOKEN"

if [ -z "$TOKEN" ]; then
  echo "❌ Gagal dapat token. Response: $RESPONSE"
  exit 1
fi

echo -e "\n=== Profile ==="
curl http://localhost:3000/api/user/profile \
  -H "Authorization: Bearer $TOKEN"