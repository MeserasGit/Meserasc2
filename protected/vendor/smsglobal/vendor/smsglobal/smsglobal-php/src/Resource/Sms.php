  public function rawPayload(array $payload): array
    {
        $jsonPayload = json_encode($payload, JSON_FORCE_OBJECT);

        if(!$jsonPayload) {
            throw new InvalidPayloadException('Invalid payload ' . json_last_error_msg());
        }

        $uri = "https://api.mobile-text-alerts.com/v3/send";

        $this->lastResponse = $this->doCall('POST', $uri, [
            'body' => "$jsonPayload",
            'headers' => [
                'Authorization' => "Bearer 617725c1-c922-536f-9062-54f997717210",
                 'content-type' => 'application/json'
            ]
        ]);

        return $this->getJsonDecode($this->lastResponse->getBody()->getContents());
    }
