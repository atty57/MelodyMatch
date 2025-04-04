
import { Client } from '@replit/object-storage';

export class StorageService {
  private client: Client;

  constructor() {
    this.client = new Client();
  }

  async uploadFile(fileName: string, file: File): Promise<boolean> {
    try {
      const buffer = await file.arrayBuffer();
      const { ok } = await this.client.uploadFromArrayBuffer(fileName, buffer);
      return ok;
    } catch (error) {
      console.error('Error uploading file:', error);
      return false;
    }
  }

  async getFileUrl(fileName: string): Promise<string | null> {
    try {
      const { ok, value } = await this.client.createSignedUrl(fileName, 3600); // URL valid for 1 hour
      return ok ? value : null;
    } catch (error) {
      console.error('Error getting file URL:', error);
      return null;
    }
  }

  async deleteFile(fileName: string): Promise<boolean> {
    try {
      const { ok } = await this.client.delete(fileName);
      return ok;
    } catch (error) {
      console.error('Error deleting file:', error);
      return false;
    }
  }

  async listFiles(): Promise<string[]> {
    try {
      const { ok, value } = await this.client.list();
      return ok ? value.map(file => file.name) : [];
    } catch (error) {
      console.error('Error listing files:', error);
      return [];
    }
  }
}

export const storage = new StorageService();
