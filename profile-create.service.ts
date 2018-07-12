 postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'http://localhost:3000/profile/upload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData)
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
}